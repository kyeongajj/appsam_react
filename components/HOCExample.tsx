import { ComponentType, PropsWithChildren, useEffect } from 'react';

/**
 * withLifecycleLogging HOC 정의.
 * 이 HOC는 React 컴포넌트를 감싸서, 마운트될 때와 언마운트될 때, 그리고 업데이트될 때 로그를 남깁니다.
 * @param WrappedComponent - 로그를 남길 컴포넌트.
 * @returns 로그 기능이 추가된 새로운 컴포넌트.
 */
const withLifecycleLogging = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithLifecycleLogging = (props: PropsWithChildren<P>) => {
    useEffect(() => {
      console.log('Mount되었습니다.');
      return () => console.log('Unmount되었습니다.');
    }, []);

    useEffect(() => {
      console.log('Component가 update되었습니다.');
    });

    // WrappedComponent를 렌더링하고, 받은 props를 그대로 전달합니다.
    return <WrappedComponent {...props} />;
  };

  // WrappedComponent의 displayName이나 name을 사용하여 WithLifecycleLogging 컴포넌트의 displayName을 설정합니다.
  // 이는 디버깅 시에 유용하게 사용됩니다.
  const wrappedComponentName: string =
    WrappedComponent.displayName ?? WrappedComponent.name ?? 'Component';
  WithLifecycleLogging.displayName = `WithLifecycleLogging(${wrappedComponentName})`;

  // 설정된 displayName과 로그 기능이 추가된 컴포넌트를 반환합니다.
  return WithLifecycleLogging;
};

// 생성된 HOC를 내보냅니다.
export default withLifecycleLogging;
