import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 'as17cx1g7x5t',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      //   .then((response) => console.log(response));
      const projects = response.items.map((item) => {
        const { title, url, img } = item.fields;
        const id = item.sys.id;
        const image = img?.fields?.file?.url;

        return { title, url, id, image };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { projects, loading };
};
