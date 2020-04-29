import * as React from 'react';
import ContentLoader from 'react-content-loader'

type State = {
  width: number,
  height: number
}

const ImageLoader: React.FC<State> = ({width, height}) => (
  <ContentLoader
    speed={1}
    backgroundColor={'#f2f2f2'} // この辺無いと色変わるアニメーションできないっぽい
    foregroundColor={'#dbdbdb'} // この辺無いと色変わるアニメーションできないっぽい
    viewBox={`0 0 ${width} ${height}`}
  >
    <rect x="0" y="0" rx="5" ry="5" width={width} height={height} />
  </ContentLoader>
)

export { ImageLoader }
