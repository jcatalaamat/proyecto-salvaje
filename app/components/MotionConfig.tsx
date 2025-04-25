import React from 'react';
import { MotionConfig as FramerMotionConfig } from 'framer-motion';

interface MotionConfigProps {
  children: React.ReactNode;
}

export default function MotionConfig({ children }: MotionConfigProps) {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return <>{children}</>;
  }

  return (
    <FramerMotionConfig reducedMotion="user">
      {children}
    </FramerMotionConfig>
  );
} 