// Image loader for static build (it load local image)
// from https://nextjs.org/docs/app/building-your-application/deploying/static-exports
export default function localImageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {

  // TODO: Use the following for cloudinary
  /* const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  return `https://res.cloudinary.com/demo/image/upload/${params.join(
    ','
  )}${src}` */

  // Return local image
  return `${src}`
}