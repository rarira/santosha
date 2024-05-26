'use server';

export async function onFormPostAction(previousState: { message: string }, formData: FormData) {
  console.log({ previousState, formData });
  return { message: '' };
}
