'use strict';

// This is a server component by default, but we'll use a client-side wrapper for reveal animations
import NarrativeContent from './NarrativeContent';

export default function Page() {
  return (
    <main>
      <NarrativeContent />
    </main>
  );
}
