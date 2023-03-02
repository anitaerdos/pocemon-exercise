import { useRouter } from "next/router";
import { IconButton, Typography, Box } from "@mui/material";
import { ArrowBackIos, HomeOutlined } from "@mui/icons-material";

export interface IHeaderProps {
  pageName: "Home" | "Details";
}

export const headerVariations = {
  Home: <HomeOutlined htmlColor="white" />,
  Details: <ArrowBackIos htmlColor="white" />,
};

export default function Header(props: IHeaderProps) {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "green",
        paddingX: "20px",
      }}
    >
      <IconButton onClick={() => router.push({ pathname: "/" })}>
        {headerVariations[props.pageName]}
      </IconButton>
      <Typography sx={{ color: "white" }}>{props.pageName}</Typography>
    </Box>
  );
}
