import React, { useState } from 'react';
import { DateTime } from 'luxon'
import { Main, Thumbnail, Wrap, MainInner, Title, Body, Content, Footer, FooterMore, FooterMoreBtn, AnimatedMainOverLay } from './ditto.style';
import { HashIcon } from '@hansanghyeon/design-system.icon.hash';
import { useTransition } from 'react-spring'

export type DittoProps = {
  /**
   * a node to be rendered in the special component.
   */
  content?: string;
  title?: string;
  thumbnail?: string;
  terms?: Array<{
    id: string;
    name: string;
    taxonomyName: string;
  }>
};

export function Ditto({ content, title, thumbnail, terms }: DittoProps) {
  const [termsOpen, setTermsOpen] = useState(false);
  const termsToggle = () => {
    setTermsOpen(!termsOpen);
  }
  const termsTransition = useTransition(termsOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });;
  const termsClose = () => {
    setTermsOpen(false);
  }

  const dt = DateTime.now();
  return (
    <Wrap>
      <Main isThumbnail={!!thumbnail}>
        {thumbnail && <Thumbnail>
          <img src={thumbnail} alt="" />
        </Thumbnail>}
        <MainInner isThumbnail={!!thumbnail}>
          <Body>
            <Title><a href="">{title}</a></Title>
            <Content>
              {content}
            </Content>
            {termsTransition((style, item) => item && (
              <AnimatedMainOverLay onMouseLeave={termsClose} style={{ ...style, transitionTimingFunction: 'cubic-bezier(0,0,.2,1)', transitionDuration: '300' }}>
                test
              </AnimatedMainOverLay>
            ))}
          </Body>
          <Footer>
            <FooterMore>
              <FooterMoreBtn onClick={termsToggle}>
                <HashIcon width="1.2em" height="1.2em" />
              </FooterMoreBtn>
            </FooterMore>
            <time dateTime={dt.toLocaleString(DateTime.DATE_MED)}>{dt.toLocaleString(DateTime.DATE_MED)}</time>
          </Footer>
        </MainInner>
      </Main>
    </Wrap>
  );
}
