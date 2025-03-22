
export const ImageCard = ({name, prompt, photo}: {name: string, prompt: string, photo: stirng}) => {
  return (
    <div>
      <img src={photo} alt={prompt} />
      <h2 className="text-4xl">{name}</h2>
      <p>{prompt}</p>
    </div>
  )
}
