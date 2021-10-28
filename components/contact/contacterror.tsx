import * as React from 'react';

export default function Component(data) {
    return (
      <>
        { (data.error_data.name) === '' ? (
          <><p className='alert_inner_txt'>名前を入力してください。</p></>
        ) : (
          <></>
        ) }
        { (data.error_data.email) === '' ? (
          <><p className='alert_inner_txt'>メールアドレスを入力してください。</p></>
        ) : (
          <></>
        ) }
        { (data.error_data.title) === '' ? (
          <><p className='alert_inner_txt'>お問い合わせ内容を入力してください。</p></>
        ) : (
          <></>
        ) }
        { (data.error_data.body) === '' ? (
          <><p className='alert_inner_txt'>お問い合わせ詳細を入力してください。</p></>
        ) : (
          <></>
        ) }
      </>
    );
}