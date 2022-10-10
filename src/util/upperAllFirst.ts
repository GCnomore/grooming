export default function upperAllFirst(str: string): string {
  const regex = /(\b[a-z](?!\s))/g;
  return str.replace(regex, function (x) {
    return x.toUpperCase();
  });
}
