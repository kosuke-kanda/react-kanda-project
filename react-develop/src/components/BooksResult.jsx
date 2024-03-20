import { memo } from "react";
// import { Text } from '@chakra-ui/react';
// import { Heading } from '@chakra-ui/react';

const BooksResult = memo((props) => {

  const { items } = props;

  return (
    <div>
      <div className="mb-16">
        {items.map((item, index) => {
          return (<div className="text-lg m-8"
            key={index}>
            <a href={item.link} target='_blank' >
              <img src={item.image} />
              <div className='p16'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </a>
          </div>)
        })}
      </div>
    </div>
  )
})
export default BooksResult;