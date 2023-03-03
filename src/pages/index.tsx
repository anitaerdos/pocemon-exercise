import Head from "next/head";
import styles from "@/styles/custom.module.css";
import { TypesConsumer } from "@/context/types.context";
import { useRouter } from "next/router";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  MenuItem,
  FormControl,
  TextField,
  CircularProgress,
  ListItemButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useState } from "react";
import { PokemonsConsumer, PokemonsProvider } from "@/context/pokemons.context";
import { ITypePokemonProps } from "@/api/pokemonAPI";
import { CatchedConsumer } from "@/context/catched.context";
import Header from "../components/header";
import { SelectedTypeContext } from "@/context/selectedType.context";

export default function Home() {
  const router = useRouter();
  const { selectedType, setSelectedType } = useContext(SelectedTypeContext);
  const [searchText, setSearchText] = useState<string>("");
  return (
    <TypesConsumer>
      {({ isLoading, types }) => {
        return (
          <div className={styles.contentWrapper}>
            <Head>
              <title>Home</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header pageName="Home" />
            <div className={styles.content}>
              <FormControl
                sx={{
                  width: "100%",
                  maxWidth: "200px",
                }}
                size="small"
              >
                <TextField
                  select
                  disabled={isLoading}
                  id="type-select"
                  label="Type"
                  variant="standard"
                  value={selectedType}
                  onChange={(event) => setSelectedType(event.target.value)}
                  sx={{ textTransform: "capitalize" }}
                >
                  {types.results.map((res) => {
                    return (
                      <MenuItem
                        key={res.name}
                        value={res.name}
                        sx={{ textTransform: "capitalize" }}
                      >
                        {res.name}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </FormControl>
              {selectedType && (
                <CatchedConsumer>
                  {({ catchedPokemons }) => (
                    <PokemonsProvider type={selectedType}>
                      <PokemonsConsumer>
                        {({ isLoading: pokemonsLoading, pokemons }) => {
                          return (
                            <div className={styles.listWrapper}>
                              {pokemonsLoading ? (
                                <CircularProgress />
                              ) : (
                                <div className={styles.list}>
                                  <FormControl
                                    size="small"
                                    sx={{
                                      width: "100%",
                                      maxWidth: "200px",
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "flex-end",
                                    }}
                                  >
                                    <TextField
                                      id="search-input"
                                      label="Search"
                                      size="small"
                                      sx={{ display: "flex", flex: 1 }}
                                      value={searchText}
                                      variant="standard"
                                      onChange={(event) => {
                                        setSearchText(event.target.value);
                                      }}
                                    ></TextField>
                                    <SearchIcon
                                      fontSize="small"
                                      sx={{
                                        paddingBottom: "5px",
                                        paddingLeft: "5px",
                                      }}
                                    />
                                  </FormControl>
                                  <List
                                    sx={{
                                      color: "#000",
                                      maxHeight: "100%",
                                      overflowY: "scroll",
                                      marginTop: "15px",
                                    }}
                                  >
                                    {pokemons.pokemon.map(
                                      (p: ITypePokemonProps) => {
                                        if (
                                          !p.pokemon.name.includes(
                                            searchText.toLowerCase()
                                          )
                                        )
                                          return;
                                        const isCatched =
                                          catchedPokemons.includes(
                                            p.pokemon.name
                                          );
                                        return (
                                          <ListItem
                                            key={p.pokemon.name}
                                            onClick={() => {
                                              router.push({
                                                pathname: `/${p.pokemon.name}`,
                                              });
                                            }}
                                            sx={{
                                              borderLeft: isCatched
                                                ? "3px solid green"
                                                : "",
                                              color: "black",
                                            }}
                                            disablePadding
                                            divider
                                          >
                                            <ListItemButton>
                                              <ListItemText
                                                primary={p.pokemon.name}
                                                sx={{
                                                  textTransform: "capitalize",
                                                }}
                                              />
                                              <ListItemIcon
                                                sx={{ minWidth: "fit-content" }}
                                              >
                                                <ArrowForwardIosIcon
                                                  fontSize="small"
                                                  htmlColor="black"
                                                />
                                              </ListItemIcon>
                                            </ListItemButton>
                                          </ListItem>
                                        );
                                      }
                                    )}
                                  </List>
                                </div>
                              )}
                            </div>
                          );
                        }}
                      </PokemonsConsumer>
                    </PokemonsProvider>
                  )}
                </CatchedConsumer>
              )}
            </div>
          </div>
        );
      }}
    </TypesConsumer>
  );
}
