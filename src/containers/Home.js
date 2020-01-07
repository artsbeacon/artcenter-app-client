import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
import { API } from "aws-amplify";

export default function Home(props) {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!props.isAuthenticated) {
        return;
      }
  
      try {
        const artworks = await loadArtworks();
        setArtworks(artworks);
      } catch (e) {
        alert(e);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  }, [props.isAuthenticated]);
  
  function loadArtworks() {
    return API.get("artworks", "/artworks");
  }  

  function renderArtworksList(artworks) {
    return [{}].concat(artworks).map((artwork, i) =>
      i !== 0 ? (
        <LinkContainer key={artwork.artworkId} to={`/artworks/${artwork.artworkId}`}>
          <ListGroupItem header={artwork.content.trim().split("\n")[0]}>
            {"Created: " + new Date(artwork.createdAt).toLocaleString()}
          </ListGroupItem>
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/artworks/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> Create a new artwork
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Art.Center</h1>
        <p>A simple artwork app</p>
      </div>
    );
  }

  function renderArtworks() {
    return (
      <div className="artworks">
        <PageHeader>Your Artworks</PageHeader>
        <ListGroup>
          {!isLoading && renderArtworksList(artworks)}
        </ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      {props.isAuthenticated ? renderArtworks() : renderLander()}
    </div>
  );
}