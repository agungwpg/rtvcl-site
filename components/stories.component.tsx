import Image from 'next/image';
import React from 'react';

type Props = {};
type StoryList = {
  category: string;
  created_at: string;
  title: string;
  img?: string;
};

const dataStories: StoryList[] = [
  {
    category: 'career',
    created_at: 'July 4, 2019',
    title: 'Astra Credit Companies - IT Internship Program',
    img: '/story-1.jpg',
  },
  //   {
  //     category: 'product management',
  //     created_at: 'created_at',
  //     title: 'write the user story "Correctly"',
  //   },
  //   {
  //     category: 'product management',
  //     created_at: 'created_at',
  //     title: 'being a great product leader',
  //   },
  //   {
  //     category: 'product management',
  //     created_at: 'created_at',
  //     title: 'how to conduct a retrospective like a product manager',
  //   },
  //   {
  //     category: 'product management',
  //     created_at: 'created_at',
  //     title: 'the best product management solutions 5',
  //   },
];

const Stories = (props: Props) => {
  return (
    <div className="px-5 pb-5">
      <h4 className="text-xl font-semibold">Stories</h4>
      {dataStories.map((story) => {
        return (
          <div key={story.title} className="mb-3">
            <div className="text-sm  font-extralight text-gray-400">
              <span>{story.category}</span>
              <span> - {story.created_at}</span>
            </div>
            <div className="flex justify-between gap-2 items-top">
              <div className="flex flex-col flex-1 items-start">
                <h3 className="text-md flex-1 font-semibold">{story.title}</h3>
                <button className="bg-black text-white text-sm rounded-md mt-3 px-4 py-1 hover:bg-gray-200 ">
                  read more
                </button>
              </div>

              {story.img && (
                <div className="w-1/4 h-24 relative ">
                  <Image
                    src={story.img}
                    layout="fill"
                    objectFit="cover"
                    alt="Story 1"
                    className="rounded-xl"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
