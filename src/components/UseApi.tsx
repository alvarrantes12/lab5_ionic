import {useEffect, useState} from "react";
import axios from "axios";

function UseApi(url: any) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }

    setLoading(true);
    axios
      .get(url, config)
      .then((response)=>{setData(response.data)})
      .catch((err)=>{setError(err);})
      .finally(()=>{setLoading(value => !value);});

  },[url])

  const refetchMethod = () => {
      const config = {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      }

      setLoading(true);
      axios
        .get(url, config)
        .then((response)=>{setData(response.data)})
        .catch((err)=>{setError(err);})
        .finally(()=>{setLoading(value => !value);});
  }


  const postMethod = (data: any) => {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }

    setLoading(true);
    axios
      .post(url, data, config)
      .then((response)=>{})
      .catch((err)=>{ setError(err); })
      .finally(()=>{
        setLoading(false);
        refetchMethod();
      });

  }

  const putMethod = (data: any, movieID: number) => {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }
    setLoading(true);
    axios
      .put(`${url}/${movieID}`, data, config)
      .then((response)=>{})
      .catch((err)=>{ setError(err); })
      .finally(()=>{
        setLoading(value => !value);
        refetchMethod();
      });
  }

  const deleteMethod = (url: any) => {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }
    setLoading(true);
    axios
      .delete(url, config)
      .then((response)=>{})
      .catch((err)=>{ setError(err); })
      .finally(()=>{
        setLoading(false);
        refetchMethod();
      });
  }


  return {data, refetchMethod, postMethod, putMethod, deleteMethod, loading, error};
}

export default UseApi;