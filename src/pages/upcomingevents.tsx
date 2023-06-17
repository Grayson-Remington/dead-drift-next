import React from "react";

export default function UpcomingEvents() {
  return (
    <div className="item-center flex h-full flex-col pb-2 pt-[72px]">
      <iframe
        className="aspect-square h-full w-full max-w-2xl self-center p-10"
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fconejosriveranglers%2Fposts%2F570068585132799&show_text=true&width=500"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <img
        className="h-full w-full max-w-2xl self-center p-10 "
        src="assets/high-desert-challenge.jpg"
        alt=""
      />
      <img
        className="h-full w-full max-w-2xl self-center p-10 "
        src="assets/border-wars.jpg"
        alt=""
      />
    </div>
  );
}
