import React from 'react';

const teamMembers = [
  {
    name: 'Ram Modi',
    role: 'Full Stack Developer',
    image: 'https://media-hosting.imagekit.io//6f95c56020ac47d8/KSP04898.jpg?Expires=1835775904&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cVrH-JZb4KKMNsgiObcUsUr9pkEOuSnWgE2QExyYh1~g70GRiz-gXxeypDSEkQJhV~MZ5PlRDN8KBXRa5wZ~0pfRuINOonBNknjrbslITOFVx31pqbRw3hB9DSHNV9Tz9xItYAcoNXamkVIUI5IPVRwQyL5S88QVXnThJnxxPyFVE29ZoiYLrnt8ingW9nzBwAKi47zKXURZJ8DWt5WOozVcniS~~A3yxCOv3EFqmt8wJzFM6WVhPb3nKazLPSV3-x8bvOs2KRF5BrC63NO5-tZfs2h-JqSq1PfuklE-nNtobL8FTNmbKJx5OR2uSb-1iIXc2o3SBWJnkPO7VIKl2A__', 
    linkedin: 'https://www.linkedin.com/in/rammodi369/',
    github: 'https://github.com/rammodi369',
  },
  {
    name: 'Pradeep Singh',
    role: 'Backend Developer',
    image: 'https://media-hosting.imagekit.io//466ebfd623064e0f/IMG_20250222_120648.jpg?Expires=1835776516&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EVZWyK9h7j1fuPJkEh-HBQnUT5wkW2L1MeimOFPkpCrerstYz4No0iwh5TELe3lf62BzfCmaM975r0XdJIhxoD~~QYx7PLqEQwBaH27aWKkWoY9hl~KiFbOMl3l~Ems-SH1bBG7kqmD32BPu5bFqEzAFIW5umU5ElZxdTeHpuZm-6j3fjmRtOrqcaxLgOS3yVHdst6iOif6lqyqK4GDpXWaD4oDMI9SyXvx2hT56Czrw1Joccyrv797OO~SDUzGd0ZJpciyrInb0uiJqJr0-zxnF1mbelJzrKxWdAfcoc9kPeRRrt5eP9ZxN7AjwNFEnjApRMjiMBDAJglcLDcWTlQ__', 
    linkedin: 'https://www.linkedin.com/in/pradeep-singh-8252b5256/',
    github: 'https://github.com',
  },
  {
    name: 'Riya Parakh',
    role: 'Authentication & Quality Expert',
    image: 'https://media-hosting.imagekit.io//02241dacb5b74d55/IMG_20250222_121106.jpg?Expires=1835776107&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fdGHL8FsN0X~KVTxJY7ClvBIJuBUU7E9G9USguOgEBP1tbusIL~MT9iwcWy6v~Qza2Za~x-5UJyXtL0SlNN8Wjp3ujBLPVE-frWbhuBJpLKCzm2PSkTUxjicyjcyX9c6SNehBiGQm2fVh1JmqS-Kwmr4TDTRJ0uzIvLBpG2-tx8-XAZkhBFPmtNk8Iz3hS18f7gZ89y1BQuJVADqU46er2kZcxzfbHwjTT4XWtm1XddBJ1KTrGn355K9PEec0U1RPB54rvK7XCT-BXiQ7~ConhTlrqPL-qK3wQ5UVsp8DnvpmAFUBueXEBs58bIxNiN2h2h~AL1Y7FKAqhgwkgmFAQ__', 
    linkedin: 'https://www.linkedin.com/in/riya-parakh-403062230/',
    github: 'https://github.com',
  }
];

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      {/* <h1 className="text-3xl font-semibold mb-4 text-center">About Digi-Library</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Welcome to Digi-Library, your one-stop solution for managing your library online. Our mission is to provide an
        efficient and user-friendly platform to manage your library's books, requests, and more.
      </p> */}
      
      <h2 className="text-2xl font-semibold mb-4 text-center">Our Team</h2>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="max-w-sm w-full lg:w-1/3 px-4 py-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={member.image}
                alt={member.name}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 mx-2"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-900 mx-2"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;


