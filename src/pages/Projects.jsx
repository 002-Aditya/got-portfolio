import React from 'react';
import { ProjectList } from '../components/sections/ProjectList';
import { PageTransition } from '../components/ui/PageTransition';

export const Projects = () => {
  return (
    <PageTransition>
      <div className="flex flex-col gap-12">
        <ProjectList />
      </div>
    </PageTransition>
  );
};
