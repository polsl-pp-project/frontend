export function convertFile(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = (event) => resolve(btoa(event!.target!.result!.toString()))
    }
    catch (ex) {
      reject("Something went wrong");
    }
  })
}