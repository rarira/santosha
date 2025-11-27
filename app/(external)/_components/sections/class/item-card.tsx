import { Card } from "@ui/card";

import U from "@/libs/util";
import { Tables } from "@/types/supabase";

import ClassScoreIndicator from "./score-indicator";
import ClassThumbnailImage from "./thumbnail-Image";

interface ClassItemcardProps {
  post: Tables<"posts">;
}

function ClassItemcard({ post }: ClassItemcardProps): React.JSX.Element {
  return (
    <Card className="group relative overflow-hidden border-0 bg-linear-to-br from-yoga-sand/30 to-yoga-cream/50 backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-secondary/10 transition-all duration-500 pointer-events-none" />
      
      {/* Border glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-lg border-2 border-primary/30 blur-sm" />
      </div>

      <div className="flex flex-col relative z-10">
        {/* Image Section with Teaser Overlay */}
        <div className="relative overflow-hidden">
          {!!post.image && (
            <ClassThumbnailImage
              imageFullPath={
                (post.image as Record<string, unknown>)["fullPath"]
              }
              alt={`${post.title}-thumbnail-image`}
              className="transition-transform duration-700 group-hover:scale-110"
            />
          )}
          {/* Teaser Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-white text-sm font-medium leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {post.teaser}
            </p>
          </div>
          
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col grow">
          <h4 className="text-2xl font-semibold text-yoga-terracotta mb-6 text-center group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h4>

          <div className="space-y-4 mt-auto">
            {Object.entries(post?.extra_info ?? []).map(([key, value], index) => {
              return (
                <div
                  key={key}
                  className="flex flex-row items-center justify-between py-2 border-b border-yoga-sand/30 last:border-0 transition-all duration-300 hover:pl-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <h6 className="text-sm font-medium text-yoga-sage group-hover:text-secondary transition-colors duration-300">
                    {U.getClassScoreCriteriaName(key)}
                  </h6>
                  <ClassScoreIndicator fullScore={3} score={value} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ClassItemcard;
