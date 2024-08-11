import { createContext, useEffect, useState } from 'react';
import { categories } from '../constants';
import { getData } from '../utils/getData';

// 1) context temelini oluştur
export const YoutubeContext = createContext();

// 2) context'de tutulan verileri uygulamaya aktarıcak
export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);

  // selectedCategory her değiştiğinde API'den ilgili kategorinin verilerini çek
  useEffect(() => {
    // farklı verileri alırken öncekileri temizle
    setVideos(null);

    // Eğer ki seçili kategorinin tipi "home" veya "trending" ise o kategorinin tipinin ismine istek at
    if (selectedCategory?.type === 'home' || selectedCategory?.type === 'trending') {
      getData(`/${selectedCategory.type}`).then((data) => setVideos(data.data));
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider value={{ selectedCategory, setSelectedCategory, videos }}>
      {children}
    </YoutubeContext.Provider>
  );
};
