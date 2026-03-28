export const executeCode = async (compiler, code) => {
  const response = await fetch(
    "https://corsproxy.io/?https://api.onlinecompiler.io/api/run-code-sync",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: import.meta.env.VITE_ONLINE_COMPILER_API_KEY ?? "",
      },
      body: JSON.stringify({
        compiler,
        code,
      }),
    },
  );
  const result = await response.json();
  if (result.error) throw result.error;
  return result.output;
};

export const executePython = async (code) =>
  await executeCode("python-3.14", code);

export const executeJava = async (code) =>
  await executeCode(
    "openjdk-25",
    `
    import java.util.*;
    public class Main {
      public static void main(String[] args) {
        ${code}
      }
    }`
  )
