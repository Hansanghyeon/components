import React from 'react';
import { Ditto } from './ditto';

const props = {
  title: '2019년 되돌아보기',
  content: '100세 인생으로 보면 2019년 내 인생의 1/4을 보냈다. 처음 써보는 회고록으로 나의 2019년 이야기를 해보려한다. 내년 부터는 이게 한해의 큰 이벤트가 될것같다 🥳',
  thumbnail: 'https://bucket.hyeon.pro/wordpress/2020/03/thumbnail.jpeg',
  terms: [
    {
      "node": {
        "id": "dGVybToyNjQ=",
        "name": "Awesome",
        "taxonomyName": "dev_category"
      }
    },
    {
      "node": {
        "id": "dGVybToyMjg=",
        "name": "codewars",
        "taxonomyName": "dev_tag"
      }
    },
    {
      "node": {
        "id": "dGVybToxOTM=",
        "name": "HomeLab",
        "taxonomyName": "dev_category"
      }
    },
    {
      "node": {
        "id": "dGVybToyMDM=",
        "name": "PHP",
        "taxonomyName": "dev_tag"
      }
    },
    {
      "node": {
        "id": "dGVybToyNzU=",
        "name": "PHP8.1",
        "taxonomyName": "dev_tag"
      }
    },
    {
      "node": {
        "id": "dGVybToyMTQ=",
        "name": "traefik",
        "taxonomyName": "dev_tag"
      }
    },
    {
      "node": {
        "id": "dGVybToyMDU=",
        "name": "wordpress",
        "taxonomyName": "dev_tag"
      }
    }
  ]
}

export const BasicDitto = () => {
  return (
    <div style={{ padding: '30px', backgroundColor: 'grey' }}>
      <div style={{ maxWidth: '500px' }}>
        <Ditto {...props} />
      </div>
    </div>
  );
}

export const GroupDitto = () => {
  return (
    <div style={{ padding: '30px', backgroundColor: 'grey', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {[...(new Array(8))].map(e => <div style={{ maxWidth: '500px' }}>
        <Ditto {...props} />
      </div>)}
    </div>
  );
}