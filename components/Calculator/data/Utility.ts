import { OptionWithRole, RolesEnum } from '../context/CalculatorContext';

export function getPlatform(title: 'Apple iOS' | 'Android' | 'Web' | 'Multi-Platform') {
  switch (title) {
    case 'Apple iOS':
      return { title: 'Apple iOS', roles: [RolesEnum.MD] };
    case 'Android':
      return { title: 'Android', roles: [RolesEnum.MD] };
    case 'Web':
      return { title: 'Web', roles: [RolesEnum.FE] };
    case 'Multi-Platform':
      return { title: 'Multi-Platform', roles: [RolesEnum.BE, RolesEnum.FE] };
  }
}

export function getPlatformSize(title: 'Small' | 'Medium' | 'Large') {
  switch (title) {
    case 'Small':
      return { title: 'Small', roles: [] };
    case 'Medium':
      return { title: 'Medium', roles: [RolesEnum.PM] };
    case 'Large':
      return { title: 'Large', roles: [RolesEnum.PM] };
  }
}

export function getDesigner(title: 'Yes' | 'No') {
  switch (title) {
    case 'Yes':
      return { title: 'Yes', roles: [] };
    case 'No':
      return { title: 'No', roles: [RolesEnum.D] };
  }
}

export function getUxLevel(title: 'MVP' | 'Stock' | 'Beautiful', hasDesigner: boolean) {
  // TODO once the hours is moved into these, the hours are affected by the hasDesigner value
  switch (title) {
    case 'MVP':
      return { title: 'MVP', roles: [] };
    case 'Stock':
      return { title: 'Stock', roles: [] };
    case 'Beautiful':
      return { title: 'Beautiful', roles: [] };
  }
}

export function getPersonalProfiles(title: 'Yes' | 'No' | 'Not sure') {
  switch (title) {
    case 'Yes':
      return { title: 'Yes', roles: [RolesEnum.BE] };
    case 'No':
      return { title: 'No', roles: [] };
    case 'Not sure':
      return { title: 'Not sure', roles: [RolesEnum.BE] };
  }
}

interface LoginOptionsParams {
  selection: string[];
}
export function getLoginOptions({ selection }: LoginOptionsParams) {
  const options: OptionWithRole[] = [];
  selection.map((sel) => {
    if (sel !== 'No') {
      options.push({ title: sel, roles: [RolesEnum.BE] });
    } else {
      options.push({ title: sel, roles: [] });
    }
  });
  return options;
}

export function getAllRoles(roles: string[] | undefined) {
  if (!roles) return null;
  // remove all the duplicates
  const cleanedRoles = roles.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });
  return cleanedRoles;
}
