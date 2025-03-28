import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Frame = (): JSX.Element => {
  // User avatars data
  const userAvatars = [
    { src: "/ellipse-1.png", alt: "User avatar" },
    { src: "/ellipse-2.png", alt: "User avatar" },
    { src: "/ellipse-3.png", alt: "User avatar" },
    { src: "/ellipse-4.png", alt: "User avatar" },
  ];

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "\"I know in real-time where the money is spent, and I don't have to lend out the company's credit card anymore. What a relief!\"",
      name: "Denny Hilguston",
      username: "@denny.hill",
      avatar: "/ellipse-11.png",
    },
    {
      id: 2,
      text: "VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.",
      name: "Vani Pandey",
      username: "@vani.pandey",
      avatar: "/ellipse-11-1.png",
    },
    {
      id: 3,
      text: "I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
      name: "milly Singh",
      username: "@milly.singh",
      avatar: "/ellipse-11-2.png",
    },
  ];

  // VR technology cards data
  const vrTechCards = [
    {
      id: 1,
      title: "Metaverse",
      description:
        "A Network of 3D virtual worlds focused on social connection.",
      bgImage: "bg-[url(/rectangle-33.png)]",
    },
    {
      id: 2,
      title: "HoloLens",
      description:
        "HoloLens display information, blend with the real world, or even simulate a virtual world.",
      bgImage: "bg-[url(/rectangle-35.png)]",
    },
    {
      id: 3,
      title: "AIoT",
      description:
        "AI and IoT are both emerging innovative technologies with a lot of potentials.",
      bgImage: "bg-[url(/rectangle-34.png)]",
    },
    {
      id: 4,
      title: "TPCASTT",
      description:
        "Method is great to start students reading and inferring with little assistance from the instructor",
      bgImage: "bg-[url(/rectangle-36.png)]",
    },
  ];

  return (
    <div className="bg-[#b0b4c3] flex flex-row justify-center w-full">
      <div className="bg-[#b0b4c3] w-full max-w-[840px]">
        <div className="relative">
          {/* Hero Section */}
          <section className="w-full h-[1083px] overflow-hidden shadow-[14px_31px_38px_#17173794] [background:linear-gradient(180deg,rgba(1,2,8,1)_16%,rgba(1,2,6,1)_21%,rgba(4,0,8,1)_25%,rgba(1,1,1,1)_30%,rgba(1,1,1,1)_34%,rgba(1,1,1,1)_36%,rgba(1,1,1,1)_100%)]">
            <div className="relative px-6 pt-[272px]">
              {/* Navigation */}
              <nav className="flex justify-between items-center mb-16">
                <div className="[font-family:'IM_FELL_Great_Primer_SC-Regular',Helvetica] font-normal text-white text-[23.4px]">
                  ImmverseAI
                </div>
                <div className="flex items-center gap-6">
                  <span className="[background:linear-gradient(134deg,rgba(200,36,236,1)_0%,rgba(223,48,141,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-bold text-transparent text-[12.5px]">
                    Home
                  </span>
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[12.5px]">
                    Company
                  </span>
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[12.5px]">
                    Features
                  </span>
                  <Button className="bg-transparent hover:bg-transparent border-none text-white font-bold text-[11.1px] ml-4">
                    Sign Up
                  </Button>
                </div>
              </nav>

              {/* Main Hero Content */}
              <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/2">
                  <h1 className="[font-family:'Orbitron',Helvetica] font-black text-white text-[31.7px] leading-[43.4px] mb-6">
                    Let&apos;s Explore
                    <br />
                    Three-Dimensional
                    <br />
                    visual
                  </h1>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffd9] text-xs mb-8 max-w-[314px]">
                    With virtual technology you can see the digital world feel
                    more real and you can play the game with a new style.
                  </p>

                  <div className="flex gap-4 mb-8">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-[3.34px] h-[35px] px-4 [font-family:'Inter',Helvetica] font-bold text-[11.1px]">
                      Get it Now
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white [font-family:'Inter',Helvetica] font-bold text-[11.1px]"
                    >
                      Explore Device
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                      {userAvatars.map((avatar, index) => (
                        <Avatar
                          key={index}
                          className="w-8 h-8 border-2 border-black"
                        >
                          <AvatarImage
                            src={avatar.src}
                            alt={avatar.alt}
                            className="object-cover"
                          />
                          <AvatarFallback>U{index}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-[4.17px] mr-2"></div>
                      <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-[10px]">
                        400k people online
                      </span>
                    </div>
                  </div>
                </div>

                {/* VR Headset Feature Card */}
                <div className="md:w-1/2 relative mt-8 md:mt-0">
                  <div className="relative">
                    <div className="w-full max-w-[372px] mx-auto">
                      <div className="relative">
                        {/* Circular background elements */}
                        <div className="absolute w-[372px] h-[228px] top-7 left-0">
                          <img
                            src="/ellipse-20.svg"
                            alt="Circular background"
                            className="w-full h-full"
                          />
                        </div>

                        {/* Red oval background */}
                        <div className="absolute w-[318px] h-[153px] top-[116px] left-[19px] bg-[#c42f4f] rounded-[159.12px/76.64px] border-[1.11px] border-solid border-[#eb4468] rotate-[14deg] shadow-[inset_0px_15.59px_31.18px_#ab334d]"></div>

                        {/* VR Headset image */}
                        <img
                          className="absolute w-[336px] h-[239px] top-[43px] left-[7px] object-cover"
                          alt="VR Headset"
                          src="/ellipse-19--2--1.png"
                        />

                        {/* Feature icon */}
                        <img
                          className="absolute w-[52px] h-[52px] top-0 right-0"
                          alt="Feature icon"
                          src="/vector.svg"
                        />
                      </div>

                      {/* Card content */}
                      <Card className="mt-[280px] bg-transparent border-none">
                        <CardContent className="p-0">
                          <div className="relative">
                            <img
                              className="w-[309px] h-[325px]"
                              alt="Card background"
                              src="/rectangle-66.svg"
                            />
                            <div className="absolute top-[142px] left-0 right-0 flex flex-col items-center">
                              <h2 className="[font-family:'Orbitron',Helvetica] font-extrabold text-white text-[19.6px] mb-4">
                                Cinematic Virtual Reality
                              </h2>
                              <div className="w-[153px] h-px bg-white mb-6"></div>
                              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[11.1px] text-center max-w-[203px]">
                                Let&apos;s be the best for more real and
                                effective results and ready
                                <br />
                                to explore the limitless world that we have
                                prepared for you.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Cards */}
              <div className="flex flex-col md:flex-row gap-8 mt-16">
                <div className="relative">
                  <img
                    className="w-[205px] h-[302px]"
                    alt="VR User"
                    src="/group-3.png"
                  />
                </div>
                <div className="relative">
                  <img
                    className="w-[207px] h-[277px]"
                    alt="VR User"
                    src="/group-28.png"
                  />
                  <div className="absolute top-4 right-0 max-w-[218px]">
                    <h3 className="[font-family:'Orbitron',Helvetica] font-black text-white text-[20.8px] leading-[33.4px] mb-4">
                      New Experience In
                      <br />
                      Playing Game
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffd9] text-xs mb-6">
                      You can try playing the game with a
                      <br />
                      new style and of course a more real
                      <br />
                      feel, like you are the main character
                      <br />
                      in your game and adventure in this
                      <br />
                      new digital world.
                    </p>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-[3.34px] h-[35px] px-4 [font-family:'Inter',Helvetica] font-bold text-[11.1px]">
                      Get it Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Radial gradient backgrounds */}
              <div className="absolute w-[676px] h-[651px] top-[504px] left-0 rounded-[337.76px/325.7px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(170,20,240,0.31)_0%,rgba(170,20,240,0)_100%)]"></div>
              <div className="absolute w-[668px] h-[644px] top-[518px] left-[811px] rounded-[333.99px/322.06px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(170,20,240,0.31)_0%,rgba(170,20,240,0)_100%)]"></div>
              <div className="absolute w-[573px] h-[552px] top-0 left-[294px] rounded-[286.47px/276.24px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(170,20,240,0.31)_0%,rgba(170,20,240,0)_100%)]"></div>
            </div>
          </section>

          {/* Features Section */}
          <section className="w-full bg-[#09010e] overflow-hidden">
            {/* Header with video */}
            <div className="relative w-full h-[155px] bg-[url(/vector-5.svg)] bg-[100%_100%]">
              <div className="absolute top-[38px] left-[41px]">
                <h2 className="[font-family:'Orbitron',Helvetica] font-semibold text-white text-[18.1px]">
                  Awesome experiences with
                  <br />
                  virtual reality world
                </h2>
              </div>
              <div className="absolute top-6 right-16 w-[164px] h-[108px] bg-[url(/rectangle-11.png)] bg-cover bg-[50%_50%]">
                <div className="relative w-[25px] h-[25px] top-[41px] left-[69px] bg-[#c4c4c499] rounded-[12.62px] flex items-center justify-center">
                  <img
                    className="w-[9px] h-[13px]"
                    alt="Play button"
                    src="/vector-6.svg"
                  />
                </div>
              </div>
            </div>

            {/* VR Technology Cards */}
            <div className="relative px-6 py-16">
              <div className="flex flex-wrap justify-center gap-6 mb-16">
                {vrTechCards.map((card) => (
                  <Card
                    key={card.id}
                    className={`w-[230px] h-[180px] ${card.bgImage} bg-cover bg-center relative overflow-hidden`}
                  >
                    <CardContent className="p-0">
                      <div className="absolute bottom-0 left-0 w-[135px] h-[58px] bg-[#ffffff2e] backdrop-blur-[11.35px] p-2">
                        <h3 className="[font-family:'Orbitron',Helvetica] font-semibold text-white text-[7.3px] underline mb-2">
                          {card.title}
                        </h3>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-[#efdede] text-[7.3px] tracking-[-0.15px]">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Testimonials Section */}
              <div className="max-w-[651px] mx-auto text-center mb-16">
                <h2 className="[font-family:'Orbitron',Helvetica] font-bold text-white text-[18.8px] tracking-[-0.38px] mb-4">
                  What our clients say
                </h2>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffd9] text-[9px] mb-8">
                  See what our customer say about us. It really matter for us.
                  How good or bad
                  <br />
                  we will make ir for evaluation to make EhyalLive better.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.id}
                      className="w-[143px] h-[81px] rounded-[6.91px] backdrop-blur-[5.72px] bg-opacity-20 bg-white"
                    >
                      <CardContent className="p-2.5">
                        <div className="flex items-center mb-1">
                          <span className="[font-family:'Inter',Helvetica] font-bold text-[#f7b603] text-[5px] tracking-[0.35px]">
                            starstar
                          </span>
                          <span className="[font-family:'Inter',Helvetica] font-bold text-[#e4e5e7] text-[5px] tracking-[0.35px] ml-1">
                            star
                          </span>
                        </div>

                        <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[5.5px] tracking-[-0.11px] leading-[9.1px] mb-2">
                          {testimonial.text}
                        </p>

                        <div className="flex items-center">
                          <Avatar className="w-[19px] h-[18px] mr-2">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                            <AvatarFallback>
                              {testimonial.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[5px] tracking-[-0.10px]">
                              {testimonial.name}
                            </p>
                            <p className="[font-family:'Inter',Helvetica] font-medium text-[#eb4468] text-[5px] tracking-[-0.10px]">
                              {testimonial.username}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Background elements */}
              <div className="absolute w-[367px] h-[354px] top-[127px] left-[264px] rounded-[183.59px/177.12px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(170,20,240,0.31)_0%,rgba(170,20,240,0)_100%)]"></div>
              <img
                className="absolute w-[615px] h-[593px] top-0 left-0"
                alt="Background circle"
                src="/ellipse-7.svg"
              />
              <div className="absolute top-[143px] left-[517px] [font-family:'Roboto',Helvetica] font-bold text-black text-[10.6px] tracking-[-0.32px]">
                Virtual Reality
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
