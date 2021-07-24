import React, { FC } from "react";
import moment from "moment";
import TextSubtext from "../../base/TextSubtext";
import { Bookmark, OptionEllipse } from "../../../icons";

const formatDate = (date: string, format: string) =>
  moment(date).format(format);

const CarouselCard: FC<any> = ({ item }) => {
  return (
    <div className="col-span-12 grid grid-cols-12">
      <div className="sm:col-span-7 col-span-12">
        <img
          src={item.blog_img.src}
          alt={item.blog_img.alt}
          className="md:pr-5 w-full h-80 bg-cover mx-auto object-cover"
        />
      </div>
      <div className="sm:col-span-5 col-span-12 flex flex-col justify-between p-3">
        <div>
          <div className="category-date-time pb-3 overflow-hidden">
            <span className="uppercase text-sm font-bold whitespace-nowrap">
              {item.category}
            </span>
            &nbsp;·&nbsp;
            <span className="text-sm text-gray-500 font-thin whitespace-nowrap">
              {formatDate(item.publication, "MMM D")}
            </span>
            &nbsp;·&nbsp;
            <span className="text-sm text-gray-500 font-thin whitespace-nowrap">
              {item.read_time} read
            </span>
          </div>
          <div className="title pb-3">
            <span className="font-medium text-2xl clamp clamp-line-2">
              {item.title}
            </span>
          </div>
          <div className="desc pb-3">
            <span className="text-gray-500 font-thin text-lg leading-8 clamp clamp-line-4">
              {item.short_desc}
            </span>
          </div>
        </div>
        <div className="author-bookmark-opt grid grid-cols-12 justify-between">
          <div className="img-text-subtext col-span-10 flex">
            <img
              src={item.author.profile_img.src}
              alt={item.author.profile_img.alt}
              className="rounded-full h-9 mr-1"
            />
            <TextSubtext
              text={item.author.name}
              subtext={formatDate(item.published, "MMM D, YYYY")}
              textClassName="font-thin text-sm text-gray-800"
              subtextClassName="font-thin text-xs text-gray-500"
            />
          </div>
          <div className="flex icons col-span-2 justify-around pr-3">
            <Bookmark fill="black" className="h-5 self-center" />
            <OptionEllipse fill="black" className="h-5 self-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
