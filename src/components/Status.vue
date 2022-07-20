<script setup lang="ts">
import { Ref, ref, onMounted, onUnmounted } from 'vue';
import { DateTime, DateObjectUnits } from 'luxon';
import seedrandom from 'seedrandom';

type Status = {
  name: string,
  icon: string,
  date: string,
  time: string[],
  duration: string[],
  priority: number
};

const hasStatus = ref(false);
const icon = ref('code');
const label = ref('');
const statusInterval = ref();
const genericStatusData: Ref<Status[] | null> = ref(null);
const status = ref();
const statusLabel = ref();

onMounted(() => {
  getCurrentStatus();
});

onUnmounted(() => {
  clearInterval(statusInterval.value);
});

const seededRandom = (seed: string, max: number, min: number = 0): number => {
  return Math.round(seedrandom(seed)() * (max - min) + min)
};

const getCurrentStatus = async (): Promise<void> => {
  statusInterval.value = setInterval(async (): Promise<void> => {
    await updateStatus();
  }, 60000)
  await updateStatus();
};

const updateStatus = async (): Promise<void> => {
  let activities = [];
  activities.push(...(await fetchGenericStatusData()));

  activities = orderActivities(activities);
  const currentActivity = filterActivities(activities);
  hasStatus.value = !!currentActivity;

  if(currentActivity) {

    label.value = currentActivity.name;
    icon.value = currentActivity.icon;

    setTimeout(() => {
      status.value.style.setProperty(
        '--status-width',
        `${statusLabel.value.offsetWidth}px`
      );
    });
  }
};

const fetchGenericStatusData = async (): Promise<Status[]> => {
  if(genericStatusData.value === null) {
    const data = await fetch('/status.json');
    genericStatusData.value = [...await data.json()];
  }

  return genericStatusData.value;
};

const findStartOfLastWeekDay = (day: string, currentDay: DateTime | null = null): DateTime | null => {
  if (currentDay === null) {
    currentDay = DateTime.now().setZone('Europe/Amsterdam').startOf('day')
  }

  if (day === 'daily') {
    return currentDay

  } else if (day === 'weekend') {
    let foundDay = currentDay
    while (true) {
      if (['Sat', 'Sun'].includes(foundDay.weekdayShort)) {
        return foundDay
      }
      foundDay = foundDay.minus({ day: 1 })
    }

  } else if (day === 'workday') {
    let foundDay = currentDay
    while (true) {
      if (!['Sat', 'Sun'].includes(foundDay.weekdayShort)) {
        return foundDay
      }
      foundDay = foundDay.minus({ day: 1 })
    }

  } else if (
    [
      'mon',
      'tue',
      'wed',
      'thu',
      'fri',
      'sat',
      'sun',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ].includes(day.toLowerCase())
  ) {
    let foundDay = currentDay
    while (true) {
      if (
        day.toLowerCase() === foundDay.weekdayShort.toLowerCase() ||
        day.toLowerCase() === foundDay.weekdayLong.toLowerCase()
      ) {
        return foundDay
      }
      foundDay = foundDay.minus({ day: 1 })
    }
  }

  return null
};

const parseTime = (time: string[], seed: string): string => {
  if (Array.isArray(time) && time.length > 1) {
    const timeFirstUnits = getTimeUnits(time[0])
    const totalTimeFirstSeconds =
      3600 * (timeFirstUnits.hour ?? 0) +
      60 * (timeFirstUnits.minute ?? 0) +
      (timeFirstUnits.second ?? 0)
    const timeSecondUnits = getTimeUnits(time[1])
    const totalTimeSecondSeconds =
      3600 * (timeSecondUnits.hour ?? 0) +
      60 * (timeSecondUnits.minute ?? 0) +
      (timeSecondUnits.second ?? 0)
    const difference =
      Math.max(totalTimeFirstSeconds, totalTimeSecondSeconds) -
      Math.min(totalTimeFirstSeconds, totalTimeSecondSeconds)
    const startTime =
      totalTimeFirstSeconds < totalTimeSecondSeconds ? time[0] : time[1]
    const { hour, minute, second } = DateTime.now()
      .set(getTimeUnits(startTime))
      .plus({ second: seededRandom(seed, difference) })
      .toObject()
    return `${hour < 10 ? '0' : ''}${hour}:${
      minute < 10 ? '0' : ''
    }${minute}:${second < 10 ? '0' : ''}${second}`
  } else if (Array.isArray(time) && time.length === 1) {
    return time[0]
  } else if (typeof time === 'string') {
    return time
  }
  return '00:00:00'
};

const filterActivities = (data: Status[]): Status | undefined => {
  const now = DateTime.now().setZone('Europe/Amsterdam');
  const currentDaySeed = now.startOf('day').toUnixInteger();

  return data.find((entry: Status) => {
    const seed = currentDaySeed + JSON.stringify(entry)
    const date = entry.date
    const time = parseTime(entry.time, seed)
    const duration = parseTime(entry.duration, seed)
    const startDay = findStartOfLastWeekDay(date)

    if(startDay === null) {
      return false;
    }

    const start = startDay.set(getTimeUnits(time))
    const end = start.plus(getTimeUnits(duration))
    if(start <= now && now < end) {
      return true
    }

    const previousEntryStartDay = findStartOfLastWeekDay(date, startDay.minus({ second: 1 }));

    if(previousEntryStartDay) {
      const previousEntryStart = previousEntryStartDay.set(getTimeUnits(time));
      const previousEntryEnd = previousEntryStart.plus(getTimeUnits(duration));

      if(previousEntryStart <= now && now < previousEntryEnd) {
        return true
      }
    }

    return false
  });
};

const getTimeUnits = (timeString: string): DateObjectUnits => {
  const units: DateObjectUnits = {
    hour: 0,
    minute: 0,
    second: 0,
  };

  const parts = timeString.split(':');

  if(parts.length > 0) {
    units.hour = parseInt(parts[0]);
    units.hour = !isNaN(units.hour) ? units.hour : 0;
    units.hour = Math.min(23, Math.max(0, units.hour));
  }

  if(parts.length > 1) {
    units.minute = parseInt(parts[1]);
    units.minute = !isNaN(units.minute) ? units.minute : 0;
    units.minute = Math.min(59, Math.max(0, units.minute));
  }
  
  if(parts.length > 2) {
    units.second = parseInt(parts[2]);
    units.second = !isNaN(units.second) ? units.second : 0;
    units.second = Math.min(59, Math.max(0, units.second));
  }
  
  return units;
};

const orderActivities = (data: Status[]): Status[] => {
  return data.sort((a, b) => Math.sign(a.priority - b.priority))
};
</script>

<template>
  <div ref="status" :class="['status', hasStatus ? 'status--active' : '']">
    <span class="status__label">
      <span class="status__icon">
        {{ icon }}
      </span>
      <span class="status__text">
        <label ref="statusLabel">{{ label }}</label>
      </span>
    </span>
  </div>
</template>

<style scoped lang="scss">
.status {
  --status-width: 200px;
  --icon-size: 2.5rem;
  display: grid;
  position: relative;
  width: var(--icon-size);
  height: var(--icon-size);
  background-color: #FFFFFF;
  border-radius: 999rem;
  transform: scale(0);
  transition: all ease 240ms;
}
.status.status--active {
  transform: none;
}
.status__label {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  align-items: center;
  border-radius: 999rem;
  background-color: #FFFFFF;
  font-size: 0.875rem;
  box-shadow: 0 0.125rem 1rem rgba(0, 0, 0, 0.1);
}
.status__text {
  transition: all ease 240ms;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateX(-1rem);
}
.status:hover .status__text {
  transition-delay: 0ms;
  opacity: 1;
  max-width: var(--status-width);
  transform: none;
}
label {
  padding-right: 1rem;
  white-space: nowrap;
  font-weight: 500;
  color: var(--gray-800);
}
.status__icon {
  display: flex;
  height: var(--icon-size);
  width: var(--icon-size);
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transform: translateY(-1px);
}
</style>