import * as contentful from 'contentful'
import _ from 'lodash'

const client = contentful.createClient({
  space: '8tn7sq3xv35n',
  accessToken: '61ec5a98e5e4978edbcb0659989500047151bcee347c2b0cfb2250ed8f4e2464'

})

const storage = {
  state: {
    projects: {},
    filteredProjects: {},
    project: {
      'fields': {}
    },
    category: {},
    categories: [],
    projectsLoading: false
  },

  getProjects (category, cb) {
    this.state.projectsLoading = true
    client.getEntries({
      'content_type': 'project',
      'select': 'fields.title,fields.thumb',
      'order': 'fields.rank,-fields.date',
      ...(category ? {
        'fields.category.sys.contentType.sys.id': 'category',
        'fields.category.sys.id': category
      } : {})
    }).then(
      _.debounce((entries) => {
        storage.state.projects = entries.items
        this.state.projectsLoading = false
      }, 200)
    )
  },

  getProject (id, cb) {
    storage.state.project.fields = {
      'title': 'Loading...',
      'desc': '...'
    }
    client.getEntries({
      'content_type': 'project',
      'sys.id': id
    }).then((entry) => {
      storage.state.project = entry.items[0]
    })
  },

  getCategories (cb) {
    client.getEntries({
      'content_type': 'category'
    }).then((entries) => {
        storage.state.categories = entries.items;
        cb(entries.items);
    })
  },

  filterByCategory (category, cb) {
    storage.state.category = category
    client.getEntries({
      'content_type': 'project',
      'fields.category.sys.contentType.sys.id': 'category',
      'fields.category.sys.id': category.sys.id
    }).then((entries) => {
      storage.state.filteredProjects = entries.items
    })
  },

  clearCategory (cb) {
    storage.state.category = {}
  }
}

export default {
  state: storage.state,
  getProjects (category, cb) { storage.getProjects(category, cb) },
  getProject (id, cb) { storage.getProject(id, cb) },
  getCategories (cb) { storage.getCategories(cb) },
  filterByCategory (id, cb) { storage.filterByCategory(id, cb) },
  clearCategory (cb) { storage.clearCategory(cb) }
}
