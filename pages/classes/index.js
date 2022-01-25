import Image from "next/image";
import GradientButton from "../../components/GradientButton";
import Blob from "../../components/Blob";
import { useRouter } from "next/router";
import WhiteButton from "../../components/WhiteButton";

export default function Classes() {
  const { pathname } = useRouter();

  return (
    <>
      <div className="classes-page">
        <div className="inner-page">
          {/* first container */}
          <div className="base-container">
            <div className="main-heading">
              <h1>Looking to learn something new?</h1>
              <img
                src="classesAssets/line-vector.png"
                className="line-vector"
              />
            </div>

            <img
              src="classesAssets/base-container-vector.png"
              className="container-vector"
            />
          </div>

          {/* items container */}

          <div className="items-container">
            <div className="item forward">
              <div className="overlap-images">
                <img
                  className="down-img"
                  src="classesAssets/cutting-vector.png"
                  width="300px"
                />
                <img
                  className="top-img"
                  src="classesAssets/data-processing.png"
                  width="200px"
                />
              </div>
              <div className="text-data">
                <h1>Learn the cutting edge</h1>
                <p>
                  Our classes cover the bleeding edge in the latest tech trends
                  and practices. Learn the newest skills and techniques allowing
                  you to become unstoppable.
                </p>
              </div>
            </div>
            <div className="item reverse">
              <div className="overlap-images">
                <img
                  className="down-img"
                  src="classesAssets/world-vector.png"
                  width="300px"
                />
                <img
                  className="top-img"
                  src="classesAssets/world.png"
                  width="250px"
                />
              </div>
              <div className="text-data">
                <h1>Gain real world experience</h1>
                <p>
                  Each class teaches you the concepts, and then instantly teams
                  you up with a non profit organization that needs those skills
                  and guides you to apply them in a real world setting.
                </p>
              </div>
            </div>
            <div className="item forward">
              <div className="overlap-images">
                <img
                  className="down-img"
                  src="classesAssets/letter-vector.png"
                  width="300px"
                />
                <img
                  className="top-img"
                  src="classesAssets/love-letter.png"
                  width="200px"
                />
              </div>
              <div className="text-data">
                <h1>Have an impact</h1>
                <p>
                  Your skills will assist a real world charity that is in need
                  of technical expertise to help them accomplish their goals of
                  helping people. You will be helping to make a significant
                  difference in the lives of others.
                </p>
              </div>
            </div>
            <div className="item reverse">
              <div className="overlap-images">
                <img
                  className="down-img"
                  src="classesAssets/mail-vector.png"
                  width="300px"
                />
                <img
                  className="top-img"
                  src="classesAssets/certificate.png"
                  width="170px"
                />
              </div>
              <div className="text-data">
                <h1>Get Certified</h1>
                <p>
                  After succesfully completing each class and accomplishing the
                  task for the nonprofit, you will recieve a ReKompile
                  Certificate of Stellar Achievement in your name.
                </p>
              </div>
            </div>
          </div>

          <div className="page-divider">
            <img src="classesAssets/Arrow.png" alt="page-divider" />
          </div>

          {/* products container */}
        </div>
        <div className="products-container">
          <div className="box primary">
            <div className="box-data">
              <h1>Intro to Website Development</h1>
              <p>
                Learn how all the websites you love actually work, and be able
                to build anything you dream of.
              </p>
              <WhiteButton href={`${pathname}/web-dev`}>
                View Class
              </WhiteButton>
            </div>
            <div className="box-img">
              <img src="static_website_cover.svg" alt="static_website_cover" />
            </div>
          </div>
          <div className="box secondary">
            <div className="box-data">
              <h1>Intro to Game Development with Python</h1>
              <p>
                Learn how all the websites you love actually work, and be able
                to build anything you dream of.
              </p>
              <WhiteButton>
                Comming Soon!
              </WhiteButton>
            </div>
            <div className="box-img">
              <img
                src="classesAssets/video-game.png"
                alt="video-game-development"
              />
            </div>
          </div>
          <div className="box warning">
            <div className="box-data">
              <h1>Intro to JavaScript with React</h1>
              <p>
                Learn how all the websites you love actually work, and be able
                to build anything you dream of.
              </p>
              <WhiteButton>
                Comming Soon!
              </WhiteButton>
            </div>
            <div className="box-img">
              <img src="classesAssets/react.png" alt="react-development" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="page-body relative">
        <div className="flex justify-items-end items-stretch h-5/6 bg-[url('/decorations/ellipse1.svg')] bg-contain bg-no-repeat">
          <Blob
            blobType={1}
            size="1/4"
            className="left-40"
            style={{ top: "-10%" }}
          />
          <Blob blobType={2} size="1/4" className="top-60 -left-20" />
          <div className="basis-1/2 p-8">
            <h1 className="font-bold text-6xl m-8">Classes</h1>
            <div className="w-5/6 text-2xl pb-40">
              <p>
                We offer cutting edge computer science classes that will teach
                you valuable skills and leave the world a better place.
              </p>
              <p className="relative top-16 left-16">
                Each class teaches you the concepts, and then teams you up with
                a non profit organization that needs those skills and guides you
                to apply them.
              </p>
            </div>
          </div>
          <div className="basis-1/2 relative">
            <Image
              src="/online_learning.svg"
              layout="fill"
              alt="programming learning"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute bottom-10 inset-x-0 mx-auto w-fit">
            <Image
              src="/arrow.svg"
              width={"100px"}
              height={"100px"}
              alt="arrow"
            />
          </div>
        </div>

        <div className="relative">
          <Blob
            blobType={3}
            size="1/2"
            className="top-40"
            style={{ left: "-20%" }}
          />
          <Blob
            blobType={4}
            size="1/2"
            className="top-80"
            style={{ right: "-25%" }}
          />
          <div className="border-2 border-orange h-fit w-2/3 mx-auto relative p-10 m-10">
            <div className="border-2 border-orange h-full w-full absolute top-2 left-3" />
            <h2 className="text-3xl text-center relative">
              Intro to Website Development
            </h2>
            <div className="w-5/6 h-80 relative my-5 mx-auto">
              <Image
                src="/static_website_cover.svg"
                alt="static website cover"
                layout="fill"
              />
            </div>
            <div className="text-center relative">
              <GradientButton href={`${pathname}/web-dev`}>
                See More
              </GradientButton>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
