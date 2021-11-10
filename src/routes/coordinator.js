export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.push("/cadastro");
};

export const goToCreateAddress = (history) => {
  history.push("/adicionar-endereco");
};

export const goToFeed = (history) => {
  history.push("/");
};

export const goToRestaurantDetails = (history, restaurantId) => {
  history.push(`restaurante/${restaurantId}`);
};

export const goToCart = (history) => {
  history.push("/carrinho");
};

export const goToProfile = (history) => {
  history.push(`/perfil`);
};

export const goToEditProfile = (history) => {
  history.push("/editar-perfil");
};


export const goBack = (history) => {
  history.goBack()
}
