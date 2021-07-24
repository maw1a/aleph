import React, { FC, useState } from "react";
import Button from "../../base/Button";
import { ChevronBack, ChevronForward } from "../../../icons";
import CarouselCard from "./CarouselCard";

interface CarouselProps {
  items: Array<any>;
}

interface PaginationProps {
  current: number;
  total: number;
  onChange: (value: number) => void;
}

const Pagination: FC<PaginationProps> = ({ current, total, onChange }) => {
  const increment = (val: number) => (val === total ? val : val + 1);
  const decrement = (val: number) => (val === 1 ? val : val - 1);

  return (
    <div className="col-span-12 pb-3 flex justify-between items-center">
      <span className="heading text-lg">Top Stories</span>
      <div className="flex">
        <span className="pagination pr-4 my-auto">
          {current} of {total}
        </span>
        <div className="flex justify-around">
          <Button icon onClick={() => onChange(decrement(current))}>
            <ChevronBack className="h-5" />
          </Button>
          <Button icon onClick={() => onChange(increment(current))}>
            <ChevronForward className="h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Carousel: FC<CarouselProps> = ({ items }) => {
  const [pg, setPg] = useState(1);

  return (
    <div className="grid grid-cols-12 py-2 max-w-6xl mx-auto">
      <Pagination current={pg} total={items.length} onChange={setPg} />
      <CarouselCard item={items[pg - 1]} />
    </div>
  );
};

export default Carousel;
