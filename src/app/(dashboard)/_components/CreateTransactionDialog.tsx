"use client"

import { TransactionType } from '@src/lib/types';
import React from 'react'
import { Dialog, DialogTrigger } from '@components/ui/dialog';

interface DialoProps {
    trigger : React.ReactNode;
    type : TransactionType
}

function CreateTransactionDialog({ trigger, type } : DialoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
    </Dialog>
  )
}

export default CreateTransactionDialog
