import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'metalwork',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Metalwork',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'ed60638d-d98c-52c9-b631-d363eb97fb51',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'e76dd0c9-2da5-504f-bb1b-e1aa38d9c4b4',
    dynasty: {
      item: '9759fb2e-169a-5a39-8d80-11289577854b',
      name: 'Other Dynasties',
    },
    timeline: {
      code: 'uk',
      id: 'gbr',
      country: 'United Kingdom',
    },
    partner: {
      id: '38b8a503-bba9-5234-b7db-0bbb2a054c57',
      name: 'Qatar Museums',
      city: 'Doha',
      country: 'Qatar',
      objects: 3,
    },
  },
})
