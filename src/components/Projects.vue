<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import Link from '@/components/Link.vue';
import LabelCloud from '@/components/LabelCloud.vue';
</script>

<template>
  <div class="projects">
    <div class="container">
      <section class="columns">
        <div class="columns__column">
          <Segment title="Hungarian365" href="https://www.hungarian365.com/" target="_blank">
            <p>A Wordpress website focused on teaching the Hungarian language. <Link href="https://www.hungarian365.com/" target="_blank">Hungarian365</Link> uses a theme designed and developed from scratch.</p>
            <LabelCloud :labels="['PHP','Javascript','HTML','CSS','REST API','Git','JSON','Wordpress']" />
          </Segment>
    
          <Segment title="OhMyBrush" href="https://ohmybrush.com/" target="_blank">
            <p><Link href="https://ohmybrush.com/" target="_blank">OhMyBrush</Link> is a Hungarian beauty blog which won the Cosmopolitan beauty blog of the year award in 2016. The Wordpress website used multiple themes over the years all desiged and developed by me. In 2014 it got nominated as best designed blog by Cosmopolitan.</p>
            <LabelCloud :labels="['PHP', 'Javascript', 'HTML', 'CSS', 'Git', 'Wordpress']" />
          </Segment>
    
          <Segment title="PHP CLI" href="https://github.com/martijnvdb87/php-cli" target="_blank">
            <p>The <Link href="https://github.com/martijnvdb87/php-cli" target="_blank">PHP CLI library</Link> helps you to create CLI applications quicky. The library can also be installed via <Link href="https://packagist.org/packages/martijnvdb/php-cli" target="_blank">Composer</Link>.</p>
            <LabelCloud :labels="['PHP', 'Git', 'Composer']" />
          </Segment>
    
          <Segment title="PHP Image Resize" href="https://github.com/martijnvdb87/php-image-resize" target="_blank">
            <p>This <Link href="https://github.com/martijnvdb87/php-image-resize" target="_blank">PHP Image Resize library</Link> allows you to resize and convert images to a different file format. The supported file types are JPG, PNG, GIF and WebP. The library can also be installed via <Link href="https://packagist.org/packages/martijnvdb/php-image-resize" target="_blank">Composer</Link></p>
            <LabelCloud :labels="['PHP', 'Git', 'Composer']" />
          </Segment>
          
          <Segment title="Wordpress Plugin Payhip Products" href="https://github.com/martijnvdb87/wordpress-plugin-payhip-products" target="_blank">
            <p>The <Link href="https://github.com/martijnvdb87/wordpress-plugin-payhip-products" target="_blank">Wordpress Payhip Products plugin</Link> will display a list of your Payhip products on your Wordpress website. It allows your visitors to buy your Payhip products directly from a Wordpress website.</p>
            <LabelCloud :labels="['PHP', 'HTML', 'Javascript', 'CSS', 'Git', 'Wordpress']" />
          </Segment>
    
          <Segment title="Wordpress Plugin Tools" href="https://github.com/martijnvdb87/wordpress-plugin-tools" target="_blank">
            <p>The <Link href="https://github.com/martijnvdb87/wordpress-plugin-tools" target="_blank">Wordpress Plugin Tools library</Link> was made to simplify the proces of creating custom post types and settings pages in Wordpress. The library can also be installed via <Link href="https://packagist.org/packages/martijnvdb/wordpress-plugin-tools" target="_blank">Composer</Link></p>
            <LabelCloud :labels="['PHP', 'HTML', 'Javascript', 'CSS', 'Git', 'Wordpress', 'Composer']" />
          </Segment>
    
          <Segment title="mRouter" href="https://github.com/martijnvdb87/mrouter" target="_blank">
            <p>A <Link href="https://github.com/martijnvdb87/mrouter" target="_blank">simple routing class</Link> for small projects build with PHP.</p>
            <LabelCloud :labels="['PHP', 'Git']" />
          </Segment>
    
          <Segment title="WYSIWYG Editor" href="https://github.com/martijnvdb87/wysiwyg-editor" target="_blank">
            <p>A simple jQuery <Link href="https://github.com/martijnvdb87/wysiwyg-editor" target="_blank">WYSIWYG editor</Link> based on the Medium.com editor.</p>
            <LabelCloud :labels="['Javascript', 'jQuery', 'HTML', 'CSS', 'Git']" />
          </Segment>
    
          <Segment title="MagyarBlogok" href="https://web.archive.org/web/20181129093940/http://www.magyarblogok.hu/" target="_blank">
            <p>One of the biggest curated Hungarian blogging feed. <Link href="https://web.archive.org/web/20181129093940/http://www.magyarblogok.hu/" target="_blank">MagyarBlogok</Link> scapped over a hundred blogs and YouTube channels multiple times a day to get titles, URL's, thumbnails and descriptions of new posts and videos. The blogs were scrapped based on historical post activity frequency, so more active blogs would be scrapped more frequently.</p>
            <LabelCloud :labels="['PHP', 'Javascript', 'SQL', 'HTML', 'CSS', 'REST API', 'Git', 'JSON']" />
          </Segment>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects {
  .container {
    padding: 1.5rem;
  }
    
  .columns__column {
    p,
    ul {
      margin-bottom: 1rem;
    }
  }
  @media only screen and (min-width: 80rem) {
    .columns__column {
      display: flex;
      flex-wrap: wrap;
      gap: 0 3rem;

      > section {
        flex: 0 0 calc(50% - 1.5rem);
      }
    }
  }
}
</style>
