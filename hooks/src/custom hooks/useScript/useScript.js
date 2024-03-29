import useAsync from "../useAsync/useAsync";
// For loading in scripts after the fetch? Like google analytics

export default function useScript(url) {
  return useAsync(() => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;

      return new Promise((resolve, reject) => {
          script.addEventListener("load", resolve);
          script.addEventListener("error", reject);
          document.body.appendChild(script);
      })
  }, [url])
}
