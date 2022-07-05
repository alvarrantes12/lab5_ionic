import { useEffect, useState } from "react";
import axios from "axios";

function UseApi(url: any) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  interface fetchNamedParams {
    apiUrl: any;
    method?: string;
    body?: any;
    params?: any;
    refetch?: boolean;
  }
  const customFetch = ({
    apiUrl,
    method = "get",
    body,
    params,
    refetch,
  }: fetchNamedParams) => {
    setLoading(true);
    axios({
      method: method,
      url: apiUrl,
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      data: body,
      ...params,
    })
      .then((response) => {
        if (refetch) customFetch({ apiUrl: url });
        else setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    customFetch({ apiUrl: url });
  }, [url]);

  const refetch = () => {
    customFetch({ apiUrl: url });
  };

  const post = (body: any) => {
    customFetch({ apiUrl: url, method: "post", body: body, refetch: true });
  };
  const put = (id: any, body: any) => {
    customFetch({
      apiUrl: `${url}/${id}`,
      method: "put",
      body: body,
      refetch: true,
    });
  };

  const remove = (id: any) => {
    customFetch({
      apiUrl: `${url}/${id}`,
      method: "delete",
      refetch: true,
    });
  };

  return { data, loading, error, refetch, post, remove, put };
}

export default UseApi;