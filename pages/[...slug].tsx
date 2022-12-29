 import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

type Props = {
  story: any;
  links: any;
  config: any;
}

export default function Page({ story, links, config }: Props) {
  story = useStoryblokState(story);
 
  return (
    <>
      <StoryblokComponent blok={story.content} links={links} config={config.content} />
    </>
  );
}
 
export async function getStaticProps({ params, preview = true }: { params: any, preview: boolean }) {
  let slug = params.slug ? params.slug.join("/") : "home";
 
  let sbParams: any = {
    version: "published", // or 'published'
    resolve_relations: 'testimonials_reference.testimonials',
  };

  
  if (preview) {
    sbParams.version = "draft";
  }
  
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/pages/${slug}`, sbParams);

  let { data: { links } } = await storyblokApi.get("cdn/links/", {
    version: 'draft',
    starts_with: 'pages',
  });

  let paths: any = [];
  Object.values(links).forEach((link: any) => {
    if (link.is_folder) {
      return;
    }
 
    paths.push(link);
  });

  let { data: config } = await storyblokApi.get(`cdn/stories/config`, sbParams);
  
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
      links: paths,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: 'draft',
    starts_with: 'pages',
  });
 
  let paths: any = [];
  Object.values(data.links).forEach((link: any) => {
    if (link.is_folder) {
      return;
    }
 
    const slug = link.slug;
    let splittedSlug = slug.replace('pages/', '').split("/");
    
    paths.push({ params: { slug: splittedSlug } });
  });
 
  return {
    paths: paths,
    fallback: false,
  };
}