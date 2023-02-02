import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import {
  Container,
  Typography,
  Box,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import Head from "next/head";

function CustomToolbar() {
  return (
    <GridToolbarContainer
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Button onClick={() => window.location.reload()}>
        <CachedIcon />
        Actualiser
      </Button>
      <Typography variant="h4">ADMIN BLOG</Typography>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const useFakeMutation = () => {
  return useCallback(
    (posts) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (posts.title?.trim() === "") {
            reject(
              new Error(
                "Erreur lors de la sauvegarde: le champ ne peux pas être vide."
              )
            );
          } else {
            resolve({ ...posts, name: posts.title?.toUpperCase() });
          }
        }, 200)
      ),
    []
  );
};

export default function Admin() {
  const [posts, setPosts] = useState([]);
  const mutateRow = useFakeMutation();
  const [snackbar, setSnackbar] = useState(null);
  const [selectionModel, setSelectionModel] = useState([]);

  const handleAddNewUser = () => {
    setUsers([...posts, newPost, values]);
    setNewPost({});
  };

  const handleCloseSnackbar = () => setSnackbar(null);

  useEffect(() => {
    const adminData = {
      isAdmin: localStorage.getItem("isAdmin"),
      accessToken: localStorage.getItem("accessToken"),
    };
    const getData = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_VITE_BACKEND_URL}/api/users`)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((error) => console.error(error));
    };
    getData();
  }, []);

  const processRowUpdate = useCallback(
    async (newRow) => {
      const dataToUpdate = {
        id: newRow.id,
        title: newRow.title,
        author: newRow.author,
        content: newRow.content,
        tags: newRow.tags,
        date: newRow.date,
        imageUrl: newRow.imageUrl,
      };

      axios
        .put(`/api/posts/${newRow.id}`, dataToUpdate)
        .then((res) => {
          const updatedPosts = posts.map((post) => {
            if (post.id === newRow.id) {
              return res.data;
            }
            return post;
          });
          setSnackbar({
            children: "Post modifié avec succès!",
            severity: "success",
          });
          const reload = () => window.location.reload();
          reload();
        })
        .catch((error) => {
          setSnackbar({ children: error.message, severity: "error" });
        });
      const response = await mutateRow(newRow);
      return response;
    },
    [mutateRow]
  );

  const handleProcessRowUpdateError = useCallback((error) => {
    setSnackbar({ children: error.message, severity: "error" });
  }, []);

  const deleteRow = () => {
    selectionModel.map((row) => {
      axios
        .delete(`/api/posts/${row}`)
        .then((res) => {
          const updatedPosts = users.map((u) => {
            if (u.id === row) {
              return res.data;
            }
            return u;
          });
          setSnackbar({
            children: "Post supprimé!",
            severity: "success",
          });
          const reload = () => window.location.reload();
          reload();
        })
        .catch((error) => {
          setSnackbar({ children: error.message, severity: "error" });
        });
    });
  };

  const title = "Posts";
  console.log(selectionModel);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Admin Blog
        </Typography>

        <div style={{ height: "80vh", width: "100%", marginTop: "5rem" }}>
          <DataGrid
            rows={posts}
            loading={!posts}
            components={{
              Toolbar: CustomToolbar,
            }}
            editMode="row"
            checkboxSelection
            processRowUpdate={(newRow) => processRowUpdate(newRow)}
            onProcessRowUpdateError={handleProcessRowUpdateError}
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
            experimentalFeatures={{ newEditingApi: true }}
            columns={[
              { field: "id", headerName: "ID", editable: false, flex: 0.1 },
              {
                field: "title",
                headerName: "Titre",
                editable: true,
                flex: 1,
              },
              {
                field: "author",
                headerName: "Auteur",
                editable: true,
                flex: 1,
              },
              {
                field: "content",
                headerName: "Contenu",
                editable: true,
                flex: 1.5,
              },
              {
                field: "tags",
                headerName: "Tags",
                editable: true,
                flex: 1.5,
              },
              {
                type: "date",
                field: "createdAt",
                headerName: "Crée le",
                editable: true,
                flex: 1,
                valueGetter: ({ value }) => value && new Date(value),
              },
              {
                field: "imageUrl",
                headerName: "Image",
                editable: true,
                flex: 1,
              },
            ]}
          />
          {!!snackbar && (
            <Snackbar
              open
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              onClose={handleCloseSnackbar}
              autoHideDuration={6000}
            >
              <Alert {...snackbar} onClose={handleCloseSnackbar} />
            </Snackbar>
          )}
        </div>
      </Container>
    </div>
  );
}
