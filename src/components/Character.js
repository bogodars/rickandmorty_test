import React from 'react';

function Character({ character }) {
  let { name, image, status, gender } = character;
  return (
    <div className='rounded-md bg-green-500 m-4 w-52 h-80 text-white'>
      <div>
        <div className=''>
          <img
            className='w-40 m-auto pt-8 hover:scale-110 transform hover:-translate-y-1 transition duration-500 ease-in-out cursor-pointer'
            src={image}
            alt={character.name}
            width='400'
            height='400'
          />
        </div>

        <div className='ml-6 mt-4'>
          <div className='w-40'>
            <strong>Name: </strong> {name}
          </div>

          <div>
            <strong>Status:</strong> {status}
          </div>
          <div>
            <strong>Gender: </strong> {gender}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
