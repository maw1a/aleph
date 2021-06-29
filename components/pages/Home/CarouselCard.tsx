import React, { FC } from "react";

const CarouselCard: FC<any> = () => {
  return (
    <div className="grid">
      <div className="md:grid-cols-7 grid-cols-12 border-2">
        <img
          src="https://images.unsplash.com/photo-1527780703622-0c74cb1c56b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          alt="blog image"
          className="object-cover w-full max-h-96"
        />
      </div>
      <div className="md:grid-cols-5 grid-cols-12">
        <h2>Title</h2>
      </div>
    </div>
  );
};

export default CarouselCard;
