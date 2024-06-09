"use client";
import { Box, Breadcrumbs, Container, Link, styled } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const TypographyMenu = styled("p")(() => ({
  display: "inline-block",
}));

const BoxMenu = styled(Box)<{ isActive?: boolean }>(({ isActive }) => ({
  width: 120,
  p: {
    cursor: "pointer",
    borderBottom: `2px solid`,
    borderBottomColor: isActive ? "#b34348" : "transparent",
  },
}));

export default function MainMenu() {
  const routes = [
    {
      label: "Shop",
      href: "/",
    },
    {
      label: "Recipes",
      href: "/recipes",
    },
    {
      label: "Learn",
      href: "/learn",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];
  return (
    <Box mb={4}>
      <Container
        sx={{
          display: "flex",
          pb: 2,
          pt: 4,
        }}
      >
        <BoxMenu position="relative">
          <Image
            style={{
              position: "absolute",
              top: -16,
            }}
            src="/logo.png"
            alt={""}
            width={80}
            height={80}
          />
        </BoxMenu>
        {routes.map((route) => (
          <BoxMenu key={route.href}>
            <Link href={route.href} color="#fff">
              <TypographyMenu>{route.label}</TypographyMenu>
            </Link>
          </BoxMenu>
        ))}
      </Container>
      <Box
        sx={{
          backgroundColor: "#3b3937",
        }}
      >
        <Container
          sx={{
            display: "flex",
            py: 1,
          }}
        >
          <BoxMenu />
          <BoxMenu>Categories</BoxMenu>
          <BoxMenu>Collection</BoxMenu>
          <BoxMenu>Resource</BoxMenu>
        </Container>
      </Box>
    </Box>
  );
}
