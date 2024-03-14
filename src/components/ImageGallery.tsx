'use client'

import React from 'react'
export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        'https://image-aws-us-west-2.vsco.co/869527/104257142/60e4e9a89c071c4f2219e834/vsco60e4e9a99e0d4.jpg',
    },

    {
      imgelink:
        'https://live.staticflickr.com/65535/53581991983_83d9de3761_o.jpg',
    },
    {
      imgelink:
        'https://live.staticflickr.com/65535/53582198265_23a6fbd224_o.jpg',
    },
    {
      imgelink:
        'https://live.staticflickr.com/65535/53581978783_3434988bfa_o.jpg',
    },
    {
      imgelink:
        'https://live.staticflickr.com/65535/53582101309_20377e46bc_o.jpg',
    },
    {
      imgelink:
        'https://live.staticflickr.com/65535/53580903612_3c4d55eec0_o.jpg',
    },
    {
      imgelink:
        'https://live.staticflickr.com/65535/53582215795_e90cca9a2f_o.jpg',
    },
    {
      imgelink:
        'https://live.staticflickr.com/65535/53588305788_d44bfd7a2a_o.jpg',
    },
    {
      imgelink:
        'https://live.staticflickr.com/65535/53587235012_265b0b3808_o.jpg',
    },
    {
      imgelink:
        'https://live.staticflickr.com/65535/53588316198_e9521e1154_o.jpg',
    },
    {
      imgelink:
        'https://live.staticflickr.com/65535/53588427854_2052246aec_o.jpg',
    },
    {
      imgelink:
        'https://live.staticflickr.com/65535/53588124576_b6f1385344_o.jpg',
    },
    {
      imgelink:
        'https://image-aws-us-west-2.vsco.co/869527/104257142/60e4d4069c071c4f2219e7d1/vsco60e4d407eff4f.jpg',
    },
    {
      imgelink:
        'https://image-aws-us-west-2.vsco.co/869527/104257142/60e4e7909c071c4f2219e815/vsco60e4e7919598d.jpg',
    },
    {
      imgelink:
        'https://image-aws-us-west-2.vsco.co/869527/104257142/60e4e7689c071c4f2219e810/vsco60e4e7690c324.jpg',
    },
  ]
  const [active, setActive] = React.useState(
    'https://image-aws-us-west-2.vsco.co/869527/104257142/60e4e9a89c071c4f2219e834/vsco60e4e9a99e0d4.jpg',
  )

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
