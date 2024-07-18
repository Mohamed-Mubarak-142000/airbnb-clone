export const getExplore = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLiveData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    const exploreData = await res.json();
    return exploreData;
  } catch (error) {
    console.log(error);
  }
};

export const getResultData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    const searchResData = await res.json();
    return searchResData;
  } catch (error) {
    console.log(error);
  }
};
