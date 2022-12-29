import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
type Props = {
  blok: any;
}

const Grid = ({ blok }: Props) => {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;