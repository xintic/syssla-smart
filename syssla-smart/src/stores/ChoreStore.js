import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useChoreStore = defineStore('choreStore', () => {
  const chores = ref([
    {
      id: 1,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 2,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 3,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 4,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 5,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 6,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 7,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 8,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 9,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 10,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 11,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 12,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 13,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 14,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 15,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 16,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 17,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 18,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 19,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    },
    {
      id: 20,
      title: '',
      deadline: '2025-03-14',
      assignedTo: '',
      isCompleted: false,
      pointValue: 1
    }
  ])


  const dialog = ref(false)

  const openDialog = () => {
    dialog.value = true;
  }

  const closeDialog = () => {
    dialog.value = false;
  }

  const addChore = (choreTitle, selectedDate) => {
    if (!choreTitle.trim()) return;

    chores.value.push({
      id: chores.value.length + 1,
      title: choreTitle,
      deadline: selectedDate || "",
      assignedTo: "",
      isCompleted: false,
      pointValue: null
    })

    dialog.value = false;
  }
  return { chores, dialog, openDialog, closeDialog, addChore }
})
