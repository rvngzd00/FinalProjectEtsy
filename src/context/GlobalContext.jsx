// import { createContext, useState, useEffect } from 'react';

// // Kontekst yarat
// export const GlobalContext = createContext();

// // Provider komponenti
// export const GlobalProvider = ({ children }) => {
//     // 🔸 Əsas məhsul dataları üçün state
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // 🔸 Favorilər və səbət
//     const [favorites, setFavorites] = useState([]);
//     const [cart, setCart] = useState([]);

//     // 🔹 Fetch məhsullar (yalnız bir dəfə)
//     useEffect(() => {
//         fetch("http://localhost:5000/products")
//             .then(res => res.json())
//             .then(data => {
//                 setProducts(data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error("Fetch error:", err);
//                 setLoading(false);
//             });
//     }, []);

//     // 🔸 Favoriyə əlavə et (əgər artıq yoxdursa)
//     const addToFavorites = (product) => {
//         setFavorites(prev => {
//             const already = prev.find(p => p.id === product.id);
//             if (already) {
//                 // Sil
//                 return prev.filter(p => p.id !== product.id);
//             }
//             // Əlavə et
//             return [...prev, product];
//         });
//     };

//     // 🔸 Səbətə əlavə et (əgər varsa quantity artır, yoxdursa əlavə et)
//     const addToCart = (product) => {
//         setCart(prev => {
//             const exist = prev.find(p => p.id === product.id);
//             if (exist) {
//                 return prev.map(p =>
//                     p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
//                 );
//             } else {
//                 return [...prev, { ...product, quantity: 1 }];
//             }
//         });
//     };
//     const updateQuantity = (productId, quantity) => {
//         setCart(prev =>
//             prev.map(item =>
//                 item.id === productId ? { ...item, quantity } : item
//             )
//         );
//     };
//     // 🔸 Səbətdən sil
//     const removeFromCart = (productId) => {
//         setCart(prev => prev.filter(item => item.id !== productId));
//     };

//     // 🔸 Favorilərdən sil
//     const removeFromFavorites = (id) => {
//         setFavorites(prev => prev.filter(p => p.id !== id));
//     };

//     return (
//         <GlobalContext.Provider value={{
//             products,
//             loading,
//             favorites,
//             cart,
//             addToFavorites,
//             addToCart,
//             removeFromCart,
//             removeFromFavorites,
//         }}>
//             {children}
//         </GlobalContext.Provider>
//     );
// };



import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <GlobalContext.Provider value={{ products }}>
      {children}
    </GlobalContext.Provider>
  );
};
