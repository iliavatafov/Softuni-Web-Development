import { useState, useEffect } from "react";

export const useFetch = (url, defaultValue) => {
  const [tasks, setTasks] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setTasks(Object.values(result));
      });
  }, [url]);

  return [tasks, setTasks, isLoading];
};
