"use client";

import React, { useEffect, useState} from "react";
import "./globals.css";
import { motion, useScroll, useTransform } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function LandingPage() {

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); 

  return (
    <div className="w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full" >
            <div className="absolute top-4 left-4 cursor-pointer">
              <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition">
                <MenuIcon className="text-white text-2xl" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full gap-4">
                <div className="w-full h-full flex flex-row justify-center items-center gap-4 flex-1">
                    <h1 className="text-7xl font-bold text-white">
                      Hi, I'm Diego, <br />a{" "}
                      <span className="relative inline-block">
                        {/* Trait derrière le texte */}
                        <motion.div
                          className="absolute left-0 bottom-1 h-[12px] bg-pink-500/80 z-0"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: false, amount: 0.6 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          style={{ transformOrigin: "left", width: "100%" }}
                        />
                        <span className="relative z-10">Fullstack</span>
                      </span>{" "}
                      developer
                    </h1>
                    <img className="w-48 h-48 border-1 border-[#272727]" src='https://placehold.co/600x600'/>
                </div>
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                  style={{ opacity }}
                >
                  <button className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition text-white">
                    <ExpandMoreIcon className="animate-bounce" />
                  </button>
                </motion.div>
            </div>
        </div>
    </div>
  );
}
