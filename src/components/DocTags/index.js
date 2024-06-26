import TagsListInline from '@theme/TagsListInline'

export default function DocTags ({ basePath, tags }) {
  return <TagsListInline tags={ tags.map((t) => ({ 
    // the default tags put a '-' between numbers and letters
    permalink: `/${basePath}/tags/${t.replaceAll(' ', '-').replaceAll(/(\d)([a-z])/gi, '$1-$2')}`,
    label: t 
  }))
}/>
}
