import React, { useEffect, useRef } from 'react';

type Props = {};

const test = (props: Props) => {
  const scrollerArea = useRef(null);

  const handleScroll = () => console.log('anjing');

  useEffect(() => {
    if (scrollerArea && scrollerArea.current) {
      scrollerArea.current.addEventListener('scroll', handleScroll);
    }
    return () => {};
  }, []);

  return (
    <div ref={scrollerArea} className="max-h-20 overflow-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab
      distinctio dignissimos fugit impedit magni sequi atque? Dolor nesciunt
      repudiandae, nisi reprehenderit recusandae tenetur, ullam velit veritatis
      dicta fugiat nihil quam voluptatem temporibus eos suscipit assumenda eum
      autem numquam vel? Sint, fugit dolor quisquam facilis aut ad porro
      reiciendis dolorem dignissimos sunt recusandae id error? Reprehenderit
      sunt mollitia quasi tempore, itaque perspiciatis facere tempora ab
      accusantium magnam reiciendis incidunt neque, soluta voluptates nemo nisi
      eius eos? Maxime expedita iure quam dolorum consectetur eligendi.
      Adipisci, totam facilis sapiente in asperiores dignissimos nisi voluptatem
      velit aspernatur dolorem suscipit maxime doloribus eligendi aliquid
      voluptatibus illo inventore repellendus modi! Excepturi, iusto, sed
      eligendi sint alias asperiores, numquam possimus provident quasi
      distinctio repellendus dolore amet assumenda porro eos. Odit alias sequi
      nam inventore, voluptas cum autem voluptates sapiente tempora praesentium
      ratione incidunt laboriosam dolore dolorem nihil tenetur repudiandae fuga
      architecto ipsa eius. Tempore error eligendi quam maxime, distinctio
      asperiores! Unde doloribus neque vitae iste inventore? Corporis
      perspiciatis aliquam fuga molestiae, quaerat quis. Officia, assumenda cum.
      Facere voluptatum officia quos, deleniti, magni natus quis commodi fugit
      veritatis atque assumenda ab velit, iusto omnis! Assumenda quia ab optio
      laudantium, nostrum vitae maxime aspernatur dolor ut est reiciendis?
    </div>
  );
};

export default test;
