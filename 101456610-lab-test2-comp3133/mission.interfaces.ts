
export interface Mission {
    id: string;
    mission_name: string;
    launch_year: number;
    details: string;
    rocket: {
      rocket_name: string;
      rocket_type: string;
    };
    links: {
      mission_patch_small: string;
      article_link: string;
      wikipedia: string;
      video_link: string;
    };
  }
  